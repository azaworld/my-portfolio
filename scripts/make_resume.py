# Generates Arifuzzaman "Antor"'s resume -> public/resume.pdf
# Run: python3 scripts/make_resume.py  (from repo root)
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
                                Table, TableStyle, HRFlowable)
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "resume.pdf")
VIOLET = colors.HexColor(0x5B21B6)
CYAN   = colors.HexColor(0x0E7490)
MAGENTA = colors.HexColor(0xBE185D)
AMBER  = colors.HexColor(0xB45309)
INK    = colors.HexColor(0x1A1C22)
MUTED  = colors.HexColor(0x5A5F6B)
LINE   = colors.HexColor(0xDAD7E3)
TAGBG  = colors.HexColor(0xF3EEFB)

styles = getSampleStyleSheet()
def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

name_s = S("name", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=VIOLET)
role_s = S("role", fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=CYAN)
cont_s = S("cont", fontName="Helvetica", fontSize=8.3, leading=11.5, textColor=MUTED)
h_s    = S("h", fontName="Helvetica-Bold", fontSize=10.8, leading=13, textColor=VIOLET, spaceBefore=9, spaceAfter=3)
body   = S("body", fontName="Helvetica", fontSize=8.5, leading=11.6, textColor=INK)
jt     = S("jt", fontName="Helvetica-Bold", fontSize=9.3, leading=11.6, textColor=INK, spaceBefore=5.5)
org_s  = S("org", fontName="Helvetica", fontSize=8.3, leading=10.6, textColor=CYAN)
bullet = S("bl", parent=body, leftIndent=10, bulletIndent=1, fontSize=8.3, leading=11.0)
comp   = S("comp", parent=body, fontSize=8.2, leading=11.6)
tagtxt = S("tag", fontName="Helvetica-Bold", fontSize=7.6, leading=9, textColor=VIOLET, alignment=1)

doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=15*mm, rightMargin=15*mm, topMargin=11*mm, bottomMargin=12*mm)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
def footer(canv, _d):
    canv.saveState(); canv.setFont("Helvetica", 7); canv.setFillColor(MUTED)
    canv.drawString(15*mm, 7.5*mm, "Arifuzzaman “Antor” — Résumé · azantor.xyz")
    canv.drawRightString(A4[0]-15*mm, 7.5*mm, f"Page {canv.getPageNumber()}")
    canv.restoreState()
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=footer)])
story, W = [], doc.width

# ---- Header ----
story += [Paragraph("ARIFUZZAMAN “ANTOR”", name_s)]
story += [Paragraph(
    "Founder &amp; CEO, AZAI Labs · Technical Project Manager, Platformz · "
    "QA &amp; Delivery Leader", role_s), Spacer(1, 3)]
story += [Paragraph(
    "Dhaka, Bangladesh (remote worldwide) · WhatsApp +880 1580 497264 · arifuzantor@gmail.com<br/>"
    "linkedin.com/in/azantor · github.com/azaworld · azantor.xyz", cont_s)]
story += [Spacer(1, 4), HRFlowable(width="100%", thickness=1.2, color=VIOLET)]

# ---- Executive Summary ----
story += [Paragraph("Executive Summary", h_s)]
story += [Paragraph(
    "Delivery leader and engineer who turns chaos into shipped products. Technical Project Manager at "
    "Platformz, running three client platforms with a <b>30+ person cross-functional team</b> — including a "
    "3P hybrid EDI program across five enterprise partners (Amazon, Walmart, Target, Chewy) compressed from a "
    "12+ month timeline into <b>~60 days</b>. Founder &amp; CEO of <b>AZAI Labs</b> (AI agents doing "
    "real client work) and founder of <b>AZADEMY</b>. Six years across QA, automation, reliability, and program "
    "delivery for Mastercard, Grameenphone, Kinetik, Kintsugi, and global insurance carriers — Upwork Top Rated, "
    "<b>23 jobs, all ★ 5.0</b>.", body)]

# ---- Core Competencies ----
story += [Paragraph("Core Competencies", h_s)]
comp_rows = [
    ["Program &amp; Delivery Management", "Cross-team Leadership (30+ people)", "AI Agents &amp; LLM Products"],
    ["Test Automation · Playwright / TS", "API, Performance &amp; Security Testing", "CI/CD · AWS · Terraform · Docker"],
    ["Stakeholder &amp; CTO Reporting", "QA Strategy &amp; Release Gates", "Magento · EDI · E-commerce"],
]
ct = Table([[Paragraph(f"• {c}", comp) for c in r] for r in comp_rows], colWidths=[W/3]*3)
ct.setStyle(TableStyle([("LEFTPADDING",(0,0),(-1,-1),2),("RIGHTPADDING",(0,0),(-1,-1),6),
                        ("TOPPADDING",(0,0),(-1,-1),1),("BOTTOMPADDING",(0,0),(-1,-1),1)]))
story += [ct]

# ---- Experience ----
story += [Paragraph("Experience", h_s)]
def job(title, org, period, bullets):
    story.append(Paragraph(f"{title} <font size=7.6 color=#5A5F6B>· {period}</font>", jt))
    story.append(Paragraph(org, org_s))
    for b in bullets:
        story.append(Paragraph(b, bullet, bulletText="–"))

job("Founder &amp; Chief Executive Officer", "AZAI Labs — San Francisco, USA (remote-first)", "2025 – Present", [
    "Founded an AI agents lab shipping practical automation for quality, operations, and decision-making — agents in production doing real client work.",
    "Own product, clients, hiring, and vision; also founder of AZADEMY (tech education) and host of the AZA Execution Podcast.",
])
job("Technical Project Manager", "Platformz — platformz.us", "Sep 2024 – Present", [
    "Run delivery for three client platforms alongside the CEO, leading a <b>30+ person team</b> across engineering, DevOps, design, and marketing.",
    "FUR4: enterprise omnichannel pet-brand platform — five portals on a Magento core; live on Chewy, Amazon, Walmart, eBay &amp; Macy's.",
    "Delivered a 3P hybrid EDI program across five enterprise partners in <b>~60 days</b> — a typical 12+ month scope.",
])
job("Sr. Software QA Engineer · SDET", "Kintsugi — San Francisco, USA (remote)", "Sep 2025 – Aug 2026", [
    "Quality engineering and SDET on an AI-powered sales-tax platform where correctness is the product.",
    "Playwright + TypeScript automation wired into CI; quality gates for AI-driven features.",
])
job("Software Automation Engineer II", "All Generation Tech — New York, USA (remote)", "Feb 2024 – May 2026", [
    "Test automation for global insurance platforms serving CFC, Tokio Marine Kiln, and American National (ANICO).",
])
job("Software QA Engineer", "Grameenphone (via Miaki) — Dhaka", "Feb 2024 – Mar 2025", [
    "Designed and built the complete backend test-automation framework for MyGP — Bangladesh's largest mobile operator app — from zero.",
])
job("QA Engineer I → QA Lead", "Kinetik — New York, USA (remote)", "Sep 2023 – Sep 2025", [
    "Owned release quality for a healthcare platform moving real patients — API automation with Playwright/Postman in TypeScript, AWS (Lambda, SQS, S3).",
    "Zero-surprise weekly launches across three product lines; QA architecture adopted org-wide.",
])
job("Sr. Software Automation &amp; Reliability Engineer", "Mastercard — remote", "Feb 2022 – Aug 2023", [
    "Chaos engineering, observability (Prometheus/Grafana), and AWS + Terraform infrastructure automation for payment-critical systems.",
    "Built CI/CD pipelines (Jenkins, GitLab CI); authored incident-response &amp; DR playbooks; mentored junior engineers.",
])
job("Software QA Engineer", "REVE Systems — Dhaka", "Dec 2022 – Aug 2023", [
    "QA lead for Sothik (Bangla AI spell checker): performance up <b>60%</b>, critical defects down <b>30%</b>; security testing with OWASP ZAP &amp; Burp Suite.",
])
job("Augmented Sr. Software QA Engineer", "Intellex via TCS — US client, global Magento (4 regions)", "2021 – 2022", [
    "2FA/verification flows (Twilio, SendGrid); multi-currency &amp; multi-language commerce validation across USA, UK, Canada &amp; Europe; Magento ↔ QuickBooks/ShipBob/Mailchimp integrations.",
])
job("Jr. Software QA Engineer", "Dynamic Solution Innovators — Dhaka", "2021 – 2022", [
    "Manual testing (TestRail) and Cypress + CI/CD automation across OpenCRVS (civil registration), Movandi (5G mmWave), and Altech.",
])
job("Software QA Engineer (part-time)", "CarryBags Ltd — London, UK (remote)", "2020 – 2021", [
    "First professional QA role — manual mobile QA on Android &amp; iOS, cross-device compatibility, and test cases from specs &amp; user stories.",
])

# ---- Career Story ----
story += [Paragraph("Career Story", h_s)]
story += [Paragraph(
    "Antor started in 2020 doing part-time mobile QA for a London retailer, then spent two years on global Magento "
    "commerce (Intellex/TCS) and civil-registration &amp; 5G systems (DSI) before moving into reliability engineering "
    "at Mastercard — chaos engineering and AWS/Terraform automation for payment-critical systems. He built QA from "
    "scratch for Bangladesh's largest mobile operator (Grameenphone/MyGP) and a healthcare platform moving real "
    "patients (Kinetik), then automated global insurance platforms at All Generation Tech. Since 2024 he has run "
    "delivery for three client platforms as Technical Project Manager at Platformz — leading a 30+ person team and "
    "compressing a 12-month EDI program into ~60 days. He also served as Sr. SDET at Kintsugi (AI-powered tax compliance) "
    "through August 2026, and is founder &amp; CEO of AZAI Labs, AZADEMY, Listen2AZA, and the Silent Sacrifice "
    "Abdus Sattar Foundation in honor of his father.", body)]

# ---- Skills tag cloud ----
story += [Paragraph("Tools &amp; Technologies", h_s)]
tags = ["Playwright", "TypeScript", "Python", "Java", "Postman", "Cypress", "AWS", "Terraform",
        "Docker", "Jenkins", "GitLab CI", "GitHub Actions", "JMeter", "k6", "OWASP ZAP", "Burp Suite",
        "Magento", "EDI", "Prometheus", "Grafana", "Appium", "Cucumber/Gherkin", "Applitools", "LLM Agents"]
tag_cols = 8
tag_rows = [tags[i:i+tag_cols] for i in range(0, len(tags), tag_cols)]
tt = Table([[Paragraph(t, tagtxt) for t in r] + [""]*(tag_cols-len(r)) for r in tag_rows], colWidths=[W/tag_cols]*tag_cols)
tt.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,-1), TAGBG),
    ("BOX",(0,0),(-1,-1),0,colors.white),
    ("LEFTPADDING",(0,0),(-1,-1),3),("RIGHTPADDING",(0,0),(-1,-1),3),
    ("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4),
]))
story += [Spacer(1, 1), tt]

# ---- Key Projects ----
story += [Paragraph("Key Projects", h_s)]
proj_rows = [
    [("FUR4 Omnichannel Platform", "Platformz · 2024–Present", "5-portal Magento core live on Chewy, Amazon, Walmart, eBay & Macy's; 60-day 3P EDI program."),
     ("MyGP Backend Automation", "Grameenphone · 2024–2025", "Built the complete backend test-automation framework for Bangladesh's largest mobile operator app.")],
    [("Sothik — Bangla Spell Checker", "REVE Systems · 2022–Present", "AI-powered Bengali grammar & spell checker — QA Lead; performance up 60%, defects down 30%."),
     ("OpenCRVS", "Dynamic Solution Innovators · 2021–2022", "Open-source civil registration so every person on the planet is recognised from birth — Cypress test design.")],
]
def proj_cell(name, meta, blurb):
    return Paragraph(f"<b>{name}</b> <font size=7.2 color=#5A5F6B>· {meta}</font><br/><font size=7.8>{blurb}</font>", comp)
pt = Table([[proj_cell(*c1), proj_cell(*c2)] for c1, c2 in proj_rows], colWidths=[W/2]*2)
pt.setStyle(TableStyle([("LEFTPADDING",(0,0),(-1,-1),2),("RIGHTPADDING",(0,0),(-1,-1),10),
                        ("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),6)]))
story += [pt]

# ---- Ventures & Community ----
story += [Paragraph("Ventures &amp; Community", h_s)]
story += [Paragraph(
    "<b>AZAI Labs</b> (AI agents lab, Founder &amp; CEO) · <b>AZADEMY</b> (learning-meets-earning tech academy, Founder) · "
    "<b>AZA Execution Podcast</b> (Host &amp; Founder) · <b>Listen2AZA</b> (audiobooks, Founder) · "
    "<b>Silent Sacrifice Abdus Sattar Foundation</b> (scholarships, mentorship, 60+ Quran students in year one — in honor of my father)", body)]

# ---- Education ----
story += [Paragraph("Education &amp; Certifications", h_s)]
for e in ["B.Sc. Engineering, Computer Science &amp; Engineering — Shahjalal University of Science and Technology (2017 – 2020)",
          "Machine Learning Specialization — Coursera (2020)",
          "Programming for Everybody (Python) — Coursera (2020)"]:
    story += [Paragraph(e, bullet, bulletText="–")]

# ---- Selected Highlights ----
story += [Paragraph("Selected Highlights", h_s)]
hl = Table([[Paragraph("<b>60 days</b><br/><font size=7.3 color=#5A5F6B>12-month EDI program delivered</font>", body),
             Paragraph("<b>30+</b><br/><font size=7.3 color=#5A5F6B>people led across 3 platforms</font>", body),
             Paragraph("<b>50+</b><br/><font size=7.3 color=#5A5F6B>projects &amp; products shipped</font>", body),
             Paragraph("<b>23 · ★5.0</b><br/><font size=7.3 color=#5A5F6B>Upwork jobs · Top Rated</font>", body),
             Paragraph("<b>4</b><br/><font size=7.3 color=#5A5F6B>ventures founded</font>", body)]],
           colWidths=[W/5]*5)
hl.setStyle(TableStyle([("BOX",(0,0),(-1,-1),0.5,LINE),("INNERGRID",(0,0),(-1,-1),0.4,LINE),
                        ("LEFTPADDING",(0,0),(-1,-1),8),("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
                        ("BACKGROUND",(0,0),(-1,-1), colors.HexColor(0xF6F4FA))]))
story += [hl]

# ---- Client Voice ----
story += [Paragraph("Client Voice", h_s)]
quote_s = S("quote", fontName="Helvetica-Oblique", fontSize=8.6, leading=12, textColor=INK)
attr_s  = S("attr", fontName="Helvetica-Bold", fontSize=7.6, leading=10, textColor=VIOLET, spaceBefore=3)
def quote_cell(text, attr):
    return [Paragraph(f"“{text}”", quote_s), Paragraph(f"— {attr}", attr_s)]
quotes = [
    ("Arifuz is now our cooperant with whom we have been working for a long time. He is very reliable, proactive, helps us with his critical thinking and always delivers.", "GameFlix, long-term client · Upwork ★5.0"),
    ("Our experience working with Arifuz is excellent. He is responsible and professional, gives clear feedback, and is always on time. We will continue our cooperation.", "Grameenphone project, SIM testing client · Upwork ★5.0"),
]
qt = Table([[quote_cell(*quotes[0]), quote_cell(*quotes[1])]], colWidths=[W/2]*2)
qt.setStyle(TableStyle([
    ("LINEBEFORE",(1,0),(1,-1),1,LINE),
    ("BACKGROUND",(0,0),(-1,-1), TAGBG),
    ("LEFTPADDING",(0,0),(0,-1),12),("LEFTPADDING",(1,0),(1,-1),16),
    ("RIGHTPADDING",(0,0),(-1,-1),12),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8),
]))
story += [qt]

doc.build(story)
print("WROTE", OUT)
