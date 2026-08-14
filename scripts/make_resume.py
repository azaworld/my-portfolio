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
    "Founder &amp; CEO, AZAI Labs · Co-Founder &amp; CTO, Upward · "
    "Technical Project Manager, Platformz · QA &amp; Delivery Leader", role_s), Spacer(1, 3)]
story += [Paragraph(
    "Dhaka, Bangladesh (remote worldwide) · WhatsApp +880 1580 497264 · arifuzantor@gmail.com<br/>"
    "linkedin.com/in/azantor · github.com/azaworld · azantor.xyz", cont_s)]
story += [Spacer(1, 4), HRFlowable(width="100%", thickness=1.2, color=VIOLET)]

# ---- Executive Summary ----
story += [Paragraph("Executive Summary", h_s)]
story += [Paragraph(
    "Delivery leader and QA engineer who turns chaos into shipped products. Technical Project Manager at "
    "Platformz, running three enterprise client platforms (FUR4, Rockerz, DMV Raw Feeders) with a <b>30+ person "
    "cross-functional team</b> — full QA ownership (automation, manual, security, load/performance) across all portals, "
    "a 3P hybrid EDI program delivered in <b>~60 days</b>, and CEO/CTO/CFO/CMO &amp; Board reporting. "
    "Founder &amp; CEO of <b>AZAI Labs</b> (AI agents doing real client work) and founder of <b>AZADEMY</b>. "
    "<b>16+ years of combined experience compressed into 6 calendar years</b> — 12 roles, up to 5 in parallel — "
    "across QA, SDET, reliability, and program delivery for Mastercard, Grameenphone, Kinetik, Kintsugi, "
    "and global insurance carriers. Upwork Top Rated, <b>23 jobs, all ★ 5.0</b>.", body)]

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

job("Co-Founder &amp; Chief Technology Officer", "Upward — upwardbd.com · Dhaka", "2026 – Present", [
    "Co-founded an AI-powered business-growth partner — 4 divisions, 8 AI-powered services (media, marketing, technology &amp; healthcare); own the technology end to end as CTO.",
])
job("Founder &amp; Chief Executive Officer", "AZAI Labs — San Francisco, USA (remote-first)", "2025 – Present", [
    "Founded an AI agents lab shipping practical automation — agents in production doing real client work. Also founder of AZADEMY (tech education) and host of the AZA Execution Podcast.",
])
job("Technical Project Manager", "Platformz — platformz.us", "Sep 2024 – Present", [
    "Single point of delivery accountability for 3 enterprise platforms alongside the CEO — leading 30+ person team: FE, BE, DevOps, design, QA, marketing &amp; HubSpot.",
    "<b>FUR4 (fur4.com)</b>: 5 portals (DTC, dealer.fur4.com, refer.fur4.com, GOD ops, AI tower) on Magento + React + GraphQL; live on Chewy, Amazon, Walmart, eBay &amp; Macy's; 3P EDI program delivered in <b>~60 days</b>.",
    "<b>Rockerz (rockerz.com)</b>: 4-zone product configurator, DTC, dealer &amp; referral portals. <b>DMV Raw Feeders (dmvrawfeeders.com)</b>: zone-based delivery routing, subscriptions &amp; referral portal.",
    "Full QA across all portals — automation (Playwright/TS), manual, security (OWASP ZAP/Burp Suite), load &amp; performance (JMeter/k6).",
    "CEO, CTO, CFO, CMO &amp; Board of Directors reporting — roadmap, risk register, delivery status &amp; P&amp;L alignment.",
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
job("QA Engineer I", "Kinetik — Long Island City, New York, USA (remote)", "Sep 2023 – Sep 2025", [
    "QA lead for the <b>Kinetik Health App</b> (iOS &amp; Android, App Store &amp; Google Play) — NEMT member app; 26,840+ pilot rides, 1.5M+ members across 44 states. Full lifecycle: manual, Playwright/TS API automation (AWS Lambda, SQS, S3), <b>Appium mobile automation</b>, load testing.",
    "Zero-surprise weekly launches across Trip Scheduler, Trip Assistant &amp; RCM; QA architecture adopted org-wide.",
])
job("Sr. Software Automation &amp; Reliability Engineer", "Mastercard — remote", "Feb 2022 – Aug 2023", [
    "Chaos engineering, observability (Prometheus/Grafana), and AWS + Terraform infrastructure automation for payment-critical systems.",
    "Built CI/CD pipelines (Jenkins, GitLab CI); authored incident-response &amp; DR playbooks; mentored junior engineers.",
])
job("Software QA Engineer &amp; Lead", "REVE Systems — Dhaka", "Dec 2022 – Aug 2023", [
    "QA Lead for <b>Sothik</b> (spell.bangla.gov.bd) — Bangladesh govt. official Bangla spell checker (Bangla Academy): performance up <b>60%</b>, defects down <b>30%</b>. QA Engineer for <b>CBMS</b> (cbc.gov.bd) — govt. Customs Bond system. Security (OWASP ZAP, Burp Suite, Kali Linux), performance (JMeter, LoadRunner), mobile (Xamarin, AWS Device Farm).",
])
job("Augmented Sr. Software QA Engineer", "Intellex via TCS — US client, global Magento (4 regions)", "2021 – 2022", [
    "2FA/verification flows (Twilio, SendGrid); multi-currency &amp; multi-language commerce validation across USA, UK, Canada &amp; Europe; Magento ↔ QuickBooks/ShipBob/Mailchimp integrations.",
])
job("Jr. Software QA Engineer", "Dynamic Solution Innovators — Dhaka", "Sep 2021 – Nov 2022", [
    "Cypress automation for <b>OpenCRVS</b> (UN-backed civil registration) + manual QA for <b>IPEMIS</b> (Bangladesh govt. Integrated Primary Education MIS, Dept. of Primary Education). Also QA for Movandi (5G mmWave) and Altech (clean energy, DR Congo).",
])
job("Software QA Engineer (part-time)", "CarryBags Ltd — London, UK (remote)", "2020 – 2021", [
    "First professional QA role — manual mobile QA on Android &amp; iOS, cross-device compatibility, and test cases from specs &amp; user stories.",
])

# ---- Career Story ----
story += [Paragraph("Career Story", h_s)]
story += [Paragraph(
    "From mobile QA in 2020 (CarryBags) → global Magento commerce (TCS) → OpenCRVS + IPEMIS (DSI) → govt. Bangla "
    "spell checker &amp; CBMS (REVE) → chaos engineering at Mastercard → Kinetik Health App (Appium, iOS/Android "
    "publish) → MyGP backend framework → insurance automation (All Gen Tech) → Sr. SDET at Kintsugi → TPM at "
    "Platformz → Founder &amp; CEO, AZAI Labs → Co-Founder &amp; CTO, Upward.", body)]

# ---- Skills tag cloud ----
story += [Paragraph("Tools &amp; Technologies", h_s)]
tags = ["Playwright", "TypeScript", "Cypress", "Appium", "k6", "JMeter", "OWASP ZAP", "Burp Suite",
        "Docker", "GitHub Actions", "AWS", "Jenkins", "GitLab CI", "Postman", "Grafana", "Terraform",
        "Next.js", "React", "Python", "Java", "C++", "Magento", "EDI", "LLM Agents"]
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
    [("FUR4 · Rockerz · DMV Raw Feeders", "Platformz · 2024–Present", "Three enterprise platforms live in production. Full QA — automation (Playwright/TS), manual, security (OWASP ZAP), load & perf (JMeter/k6) — across all portals. 60-day 3P EDI program. CEO/CTO/CFO/CMO & board reporting."),
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
             Paragraph("<b>16+ yrs</b><br/><font size=7.3 color=#5A5F6B>combined exp. in 6 calendar yrs</font>", body),
             Paragraph("<b>23 · ★5.0</b><br/><font size=7.3 color=#5A5F6B>Upwork jobs · Top Rated</font>", body),
             Paragraph("<b>5</b><br/><font size=7.3 color=#5A5F6B>ventures founded</font>", body)]],
           colWidths=[W/5]*5)
hl.setStyle(TableStyle([("BOX",(0,0),(-1,-1),0.5,LINE),("INNERGRID",(0,0),(-1,-1),0.4,LINE),
                        ("LEFTPADDING",(0,0),(-1,-1),8),("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
                        ("BACKGROUND",(0,0),(-1,-1), colors.HexColor(0xF6F4FA))]))
story += [hl]

# ---- Client Voice ----
story += [Paragraph("Client Voice", h_s)]
quote_s = S("quote", fontName="Helvetica-Oblique", fontSize=8.0, leading=10.6, textColor=INK)
attr_s  = S("attr", fontName="Helvetica-Bold", fontSize=7.4, leading=9.4, textColor=VIOLET, spaceBefore=2)
def quote_cell(text, attr):
    return [Paragraph(f"“{text}”", quote_s), Paragraph(f"— {attr}", attr_s)]
quotes = [
    ("Very reliable, proactive, helps us with his critical thinking and always delivers.", "GameFlix, long-term client · Upwork ★5.0"),
    ("Responsible and professional, gives clear feedback, and is always on time.", "Grameenphone project client · Upwork ★5.0"),
]
qt = Table([[quote_cell(*quotes[0]), quote_cell(*quotes[1])]], colWidths=[W/2]*2)
qt.setStyle(TableStyle([
    ("LINEBEFORE",(1,0),(1,-1),1,LINE),
    ("BACKGROUND",(0,0),(-1,-1), TAGBG),
    ("LEFTPADDING",(0,0),(0,-1),12),("LEFTPADDING",(1,0),(1,-1),16),
    ("RIGHTPADDING",(0,0),(-1,-1),12),
    ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
]))
story += [qt]

doc.build(story)
print("WROTE", OUT)
