from PIL import Image, ImageDraw, ImageFont
import qrcode

W, H = 1200, 850
BG_DARK = (11, 16, 38)     # site bg
VIOLET = (124, 58, 237)
CYAN = (34, 211, 238)
INK = (26, 28, 58)
GRAY = (90, 95, 107)
MUTED = (139, 147, 176)
WHITE = (255, 255, 255)

BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG  = "/System/Library/Fonts/Supplemental/Arial.ttf"
F = lambda p, s: ImageFont.truetype(p, s)

img = Image.new("RGB", (W, H), WHITE)
d = ImageDraw.Draw(img)

# Violet top strip
d.rectangle([0, 0, W, 10], fill=VIOLET)

# ---- White band ----
# Logo mark: violet rounded square with "A"
d.rounded_rectangle([44, 34, 44+92, 34+92], radius=20, fill=VIOLET)
aw = d.textlength("A", font=F(BOLD, 60))
d.text((44 + 46 - aw/2, 34 + 14), "A", font=F(BOLD, 60), fill=WHITE)
d.text((156, 44), "ANTOR", font=F(BOLD, 40), fill=INK)
d.text((156 + d.textlength("ANTOR", font=F(BOLD, 40)) + 4, 44), ".os", font=F(BOLD, 40), fill=CYAN)
d.text((158, 94), "azantor.xyz", font=F(REG, 20), fill=(8, 138, 168))

# Name + titles
d.text((44, 210), "Arifuzzaman “Antor”", font=F(BOLD, 46), fill=INK)
d.text((44, 268), "Founder & CEO, AZAI Labs", font=F(BOLD, 24), fill=VIOLET)
d.text((44, 300), "Co-founder & CTO, Upward", font=F(BOLD, 19), fill=(8, 138, 168))
d.text((44, 328), "Technical Project Manager  ·  Sr. Software Engineer", font=F(REG, 18), fill=(8, 138, 168))

# Contacts
cy = 372
rows = [
    ("WhatsApp:", "+880 1580 497264"),
    ("Email:", "arifuzantor@gmail.com"),
    ("Web:", "azantor.xyz"),
    ("LinkedIn:", "linkedin.com/in/azantor"),
]
for label, val in rows:
    d.text((44, cy), label, font=F(BOLD, 20), fill=INK)
    d.text((44 + 122, cy), val, font=F(REG, 20), fill=GRAY)
    cy += 36

# QR -> azantor.xyz
qr = qrcode.QRCode(box_size=8, border=2)
qr.add_data("https://azantor.xyz")
qr.make(fit=True)
qim = qr.make_image(fill_color="#1a1c3a", back_color="white").convert("RGB").resize((190, 190), Image.LANCZOS)
qx, qy = 540, 240
img.paste(qim, (qx, qy))
d.text((qx - 4, qy + 198), "Scan to view portfolio", font=F(BOLD, 16), fill=INK)
d.text((qx - 4, qy + 219), "& résumé", font=F(REG, 15), fill=GRAY)

# Photo — square duotone portrait with rounded corners
ph_full = Image.open("/Users/aza/Desktop/Upward/public/team/antor.png").convert("RGB")
side = ph_full.width  # 683 — square crop from the top (face + shoulders)
ph = ph_full.crop((0, 30, side, 30 + side)).resize((430, 430), Image.LANCZOS)
mask = Image.new("L", (430, 430), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, 430, 430], radius=28, fill=255)
img.paste(ph, (736, 55), mask)

# ---- Dark band ----
grad = Image.new("RGB", (1, 282))
gd = ImageDraw.Draw(grad)
top_c, bot_c = (49, 27, 116), (88, 44, 173)
for y in range(282):
    t = y / 281
    gd.point((0, y), fill=tuple(int(top_c[i] + (bot_c[i] - top_c[i]) * t) for i in range(3)))
img.paste(grad.resize((W, 282)), (0, 560))
regions = "Dhaka, Bangladesh   |   San Francisco   |   Remote Worldwide"
rw = d.textlength(regions, font=F(REG, 19))
d.text(((W - rw) / 2, 578), regions, font=F(REG, 19), fill=WHITE)
d.line([80, 616, W - 80, 616], fill=(34, 211, 238), width=2)

ventures = [
    ("AZAI LABS", "Founder & CEO · AI Agents"),
    ("PLATFORMZ", "Technical Project Manager"),
    ("KINTSUGI", "Sr. Software Engineer"),
    ("AZADEMY", "Founder · Tech Academy"),
    ("PERSONAL BRAND STUDIO", "Product Builder"),
    ("AZA PODCAST", "Host"),
    ("UPWARD", "Co-founder & CTO"),
    ("SSAS FOUNDATION", "Non-profit · Education"),
]
cols, col_w = 4, (W - 120) / 4
for i, (name, sub) in enumerate(ventures):
    cx = 60 + (i % cols) * col_w + col_w / 2
    cyv = 650 + (i // cols) * 78
    f_n = F(BOLD, 19 if len(name) < 20 else 16)
    nw = d.textlength(name, font=f_n)
    d.text((cx - nw / 2, cyv + (2 if len(name) >= 20 else 0)), name, font=f_n, fill=CYAN)
    sw = d.textlength(sub, font=F(REG, 14))
    d.text((cx - sw / 2, cyv + 25), sub, font=F(REG, 14), fill=(216, 208, 245))

foot = "Ventures & Roles of Arifuzzaman Antor"
fw = d.textlength(foot, font=F(BOLD, 20))
d.text(((W - fw) / 2, 800), foot, font=F(BOLD, 20), fill=(34, 211, 238))

d.rectangle([0, 842, W, 850], fill=VIOLET)

out = "/Users/aza/Desktop/Purpose/Job_s/Platformz/portfolio/public/ecard.png"
img.save(out, "PNG", optimize=True)
print("WROTE", out, img.size)
