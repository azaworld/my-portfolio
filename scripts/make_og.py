# Generates the social preview card -> public/og.png (1200x630)
# Used by LinkedIn, WhatsApp, Facebook, X, iMessage, Slack, etc.
# Run: python3 scripts/make_og.py
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import os

W, H = 1200, 630
BG = (11, 16, 38)        # #0B1026
VIOLET = (124, 58, 237)  # #7C3AED
CYAN = (34, 211, 238)    # #22D3EE
PINK = (244, 114, 182)   # #F472B6
TEXT = (231, 234, 245)
MUTED = (139, 147, 176)

BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
F = lambda p, s: ImageFont.truetype(p, s)

img = Image.new("RGB", (W, H), BG)

# --- soft aurora blobs, blurred ---
blobs = Image.new("RGB", (W, H), BG)
bd = ImageDraw.Draw(blobs)
bd.ellipse([-220, -260, 420, 320], fill=(56, 28, 110))
bd.ellipse([820, -180, 1420, 330], fill=(16, 82, 100))
bd.ellipse([420, 420, 1050, 900], fill=(96, 32, 84))
blobs = blobs.filter(ImageFilter.GaussianBlur(120))
img = Image.blend(img, blobs, 0.85)
d = ImageDraw.Draw(img)

# faint starfield
import random
rng = random.Random(7)
for _ in range(90):
    x, y = rng.randint(0, W), rng.randint(0, H)
    r = rng.choice([1, 1, 2])
    a = rng.randint(60, 140)
    d.ellipse([x, y, x + r, y + r], fill=(180, 200, 235))

# --- gradient top bar ---
for x in range(W):
    t = x / W
    r = int(VIOLET[0] * (1 - t) + PINK[0] * t)
    g = int(VIOLET[1] * (1 - t) + PINK[1] * t)
    b = int(VIOLET[2] * (1 - t) + PINK[2] * t)
    d.line([(x, 0), (x, 8)], fill=(r, g, b))

# --- robot mascot (right side) ---
rx, ry, s = 930, 150, 1.9  # origin + scale
def RR(x0, y0, x1, y1, rad, **kw):
    d.rounded_rectangle([rx + x0 * s, ry + y0 * s, rx + x1 * s, ry + y1 * s], radius=rad * s, **kw)
# antenna
d.line([rx + 60 * s, ry + 6 * s, rx + 60 * s, ry + 24 * s], fill=VIOLET, width=int(3 * s))
d.ellipse([rx + 55 * s, ry - 2 * s, rx + 65 * s, ry + 8 * s], fill=CYAN)
# head
RR(22, 26, 98, 88, 18, fill=(30, 27, 75), outline=VIOLET, width=int(2.5 * s))
# visor
RR(32, 40, 88, 66, 13, fill=(11, 16, 38), outline=(34, 211, 238), width=int(1.5 * s))
# eyes
d.ellipse([rx + 40 * s, ry + 46 * s, rx + 52 * s, ry + 60 * s], fill=CYAN)
d.ellipse([rx + 68 * s, ry + 46 * s, rx + 80 * s, ry + 60 * s], fill=CYAN)
d.ellipse([rx + 44 * s, ry + 48 * s, rx + 48 * s, ry + 52 * s], fill=(255, 255, 255))
d.ellipse([rx + 72 * s, ry + 48 * s, rx + 76 * s, ry + 52 * s], fill=(255, 255, 255))
# smile
d.arc([rx + 46 * s, ry + 66 * s, rx + 74 * s, ry + 82 * s], start=15, end=165, fill=PINK, width=int(3 * s))
# ears
RR(12, 48, 22, 66, 5, fill=VIOLET)
RR(98, 48, 108, 66, 5, fill=VIOLET)
# body
RR(48, 88, 72, 96, 4, fill=(70, 50, 140))
RR(36, 96, 84, 112, 8, fill=(24, 22, 60), outline=(34, 211, 238), width=int(1.2 * s))
d.ellipse([rx + 57 * s, ry + 101 * s, rx + 63 * s, ry + 107 * s], fill=PINK)

# --- text (left side) ---
x0 = 72
d.text((x0, 96), "ARIFUZZAMAN", font=F(BOLD, 76), fill=TEXT)
d.text((x0, 178), "“ANTOR”", font=F(BOLD, 76), fill=CYAN)

d.text((x0, 296), "Founder & CEO, AZAI Labs  ·  Technical Project Manager, Platformz", font=F(BOLD, 27), fill=TEXT)
d.text((x0, 334), "QA & Delivery Leader  ·  Host, AZA Execution Podcast", font=F(REG, 26), fill=MUTED)

# tagline chip
tag = "turns chaos into shipped products."
tw = d.textlength(tag, font=F(BOLD, 30))
d.rounded_rectangle([x0, 404, x0 + tw + 48, 462], radius=29, outline=VIOLET, width=3)
d.text((x0 + 24, 417), tag, font=F(BOLD, 30), fill=PINK)

# stats row
stats = [("16+", "combined yrs"), ("30+", "people led"), ("50+", "shipped"), ("23 · 5.0", "Upwork jobs")]
sx = x0
for num, lab in stats:
    d.text((sx, 508), num, font=F(BOLD, 34), fill=CYAN)
    d.text((sx, 548), lab, font=F(REG, 20), fill=MUTED)
    sx += int(d.textlength(num, font=F(BOLD, 34))) + 78

# site url bottom-right
url = "azantor.xyz"
uw = d.textlength(url, font=F(BOLD, 30))
d.text((W - uw - 60, 560), url, font=F(BOLD, 30), fill=TEXT)

out = os.path.join(os.path.dirname(__file__), "..", "public", "og.png")
img.save(out, "PNG", optimize=True)
print("WROTE", os.path.abspath(out), img.size)
