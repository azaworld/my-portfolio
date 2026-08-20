"""Generate two ATS-friendly, job-focused CVs.

Outputs:
  public/resume.pdf  — SDET / QA Automation
  public/cv.pdf      — Technical Project Manager

Founder, CEO, CTO, podcast, and instructor roles are intentionally excluded so
each document stays focused on the position being applied for.
"""

import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, Frame, HRFlowable, PageTemplate, Paragraph, Spacer, Table, TableStyle,
)

ROOT = os.path.join(os.path.dirname(__file__), "..")
SDET_OUT = os.path.join(ROOT, "public", "resume.pdf")
TPM_OUT = os.path.join(ROOT, "public", "cv.pdf")

NAVY = colors.HexColor("#172554")
BLUE = colors.HexColor("#1D4ED8")
CYAN = colors.HexColor("#0E7490")
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#566074")
LINE = colors.HexColor("#D8DFEA")
PALE = colors.HexColor("#F4F7FB")

styles = getSampleStyleSheet()


def style(name, **kwargs):
    parent = kwargs.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=parent, **kwargs)


NAME = style("Name", fontName="Helvetica-Bold", fontSize=20.5, leading=23, textColor=NAVY)
HEADLINE = style("Headline", fontName="Helvetica-Bold", fontSize=9.5, leading=11.5, textColor=CYAN)
CONTACT = style("Contact", fontName="Helvetica", fontSize=7.6, leading=9.5, textColor=MUTED)
SECTION = style("Section", fontName="Helvetica-Bold", fontSize=9.7, leading=11.5, textColor=BLUE, spaceBefore=5.5, spaceAfter=2)
BODY = style("Body", fontName="Helvetica", fontSize=7.7, leading=9.6, textColor=INK)
JOB = style("Job", fontName="Helvetica-Bold", fontSize=8.5, leading=9.8, textColor=INK, spaceBefore=3)
ORG = style("Org", fontName="Helvetica", fontSize=7.5, leading=8.8, textColor=CYAN)
BULLET = style("Bullet", parent=BODY, leftIndent=9, bulletIndent=1, fontSize=7.45, leading=9.1)
SMALL = style("Small", parent=BODY, fontSize=7.2, leading=8.8)
TAG = style("Tag", fontName="Helvetica-Bold", fontSize=6.8, leading=7.8, textColor=NAVY, alignment=1)


def make_doc(path, footer_label):
    doc = BaseDocTemplate(
        path, pagesize=A4, leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=8 * mm, bottomMargin=10 * mm, title=footer_label,
        author="Arifuzzaman Antor", subject=footer_label,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")

    def footer(canvas, _doc):
        canvas.saveState()
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(15 * mm, 5.5 * mm, f"Arifuzzaman Antor · {footer_label} · azantor.xyz")
        canvas.drawRightString(A4[0] - 15 * mm, 5.5 * mm, f"Page {canvas.getPageNumber()}")
        canvas.restoreState()

    doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=footer)])
    return doc


def header(story, headline, portfolio_path):
    story.append(Paragraph("ARIFUZZAMAN “ANTOR”", NAME))
    story.append(Paragraph(headline, HEADLINE))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "Dhaka, Bangladesh · Remote worldwide · +880 1580 497264 · arifuzantor@gmail.com<br/>"
        f"linkedin.com/in/azantor · github.com/azaworld · azantor.xyz/{portfolio_path}", CONTACT,
    ))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.1, color=BLUE))


def section(story, title):
    story.append(Paragraph(title, SECTION))


def job(story, title, org, period, bullets):
    story.append(Paragraph(f"{title} <font size=7.6 color=#566074>· {period}</font>", JOB))
    story.append(Paragraph(org, ORG))
    for item in bullets:
        story.append(Paragraph(item, BULLET, bulletText="–"))


def competency_table(story, rows, width):
    table = Table([[Paragraph(f"• {cell}", SMALL) for cell in row] for row in rows], colWidths=[width / len(rows[0])] * len(rows[0]))
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE), ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(table)


def tag_table(story, tags, width, columns=7):
    rows = [tags[index:index + columns] for index in range(0, len(tags), columns)]
    padded = [row + [""] * (columns - len(row)) for row in rows]
    table = Table([[Paragraph(cell, TAG) if cell else "" for cell in row] for row in padded], colWidths=[width / columns] * columns)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE), ("LEFTPADDING", (0, 0), (-1, -1), 2),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2), ("TOPPADDING", (0, 0), (-1, -1), 2.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
    ]))
    story.append(table)


def build_sdet():
    doc = make_doc(SDET_OUT, "SDET & QA Automation CV")
    story = []
    header(story, "Senior SDET · QA Automation &amp; Reliability Engineer · QA Consultant", "sdet")

    section(story, "Professional Summary")
    story.append(Paragraph(
        "Senior quality engineer with <b>6+ years</b> of experience building automation and release-confidence "
        "systems across web, mobile, API, performance, security, and reliability engineering. Strong hands-on "
        "delivery with <b>Playwright + TypeScript</b>, Selenium, Cypress, Appium, Postman, k6/JMeter, Docker, "
        "AWS, Terraform, and CI/CD. Built MyGP's complete backend automation framework, led mobile QA through "
        "production launch at Kinetik, and engineered resilience for payment-critical systems at Mastercard. "
        "Upwork Top Rated with 23 completed jobs and a 5.0 rating.", BODY,
    ))

    section(story, "Core SDET Competencies")
    competency_table(story, [
        ["Automation Architecture", "API &amp; Contract Testing", "Mobile Automation"],
        ["Performance Engineering", "Security Testing", "CI/CD Quality Gates"],
        ["Reliability &amp; Observability", "Test Strategy &amp; Release QA", "Mentoring &amp; Code Review"],
    ], doc.width)

    section(story, "Professional Experience")
    job(story, "Senior Software QA Engineer · SDET", "Kintsugi — San Francisco, USA (remote)", "Sep 2025 – Aug 2026", [
        "Built Playwright + TypeScript automation and CI quality gates for an AI-powered sales-tax platform where correctness is product-critical.",
        "Partnered with engineering on feature-level quality, risk analysis, regression coverage, and release readiness.",
    ])
    job(story, "Software Automation Engineer II", "All Generation Tech — New York, USA (remote)", "Feb 2024 – May 2026", [
        "Designed and maintained automation for regulated insurance platforms serving CFC, Tokio Marine Kiln, and American National (ANICO).",
    ])
    job(story, "Senior Software Automation &amp; Reliability Engineer", "Mastercard — remote", "Jan 2025 – Jun 2025", [
        "Built functional and performance automation; ran JMeter/Locust load tests and controlled chaos-engineering exercises for payment-critical systems.",
        "Implemented Prometheus/Grafana observability, AWS + Terraform infrastructure automation, CI/CD pipelines, and incident-response/DR playbooks.",
    ])
    job(story, "Augmented Senior Software QA Engineer", "Intelex via TCS — US client", "2024 – 2025", [
        "Automated global Magento commerce coverage across four regions, including Twilio 2FA, multi-currency/language flows, and QuickBooks, ShipBob, and Mailchimp integrations.",
    ])
    job(story, "Software QA Engineer", "Grameenphone via Miaki — MyGP", "Feb 2024 – Mar 2025", [
        "Architected and built the complete Playwright backend automation framework from zero for MyGP, covering the full backend regression surface.",
    ])
    job(story, "Software QA Engineer I", "Kinetik — New York, USA (remote)", "Sep 2023 – Sep 2025", [
        "Led QA for Trip Scheduler, Trip Assistant, RCM, and the Kinetik Health App; delivered manual, API, Appium mobile, security, and load coverage.",
        "Took the iOS/Android member app through production release; automated AWS-backed flows using Playwright, Lambda, SQS, and S3.",
    ])
    job(story, "Software QA Engineer &amp; Lead", "REVE Systems — Dhaka", "Dec 2022 – Aug 2023", [
        "Led QA for Sothik and CBMS; improved Sothik performance by 60% and reduced critical defects by 30% through regression strategy.",
        "Executed JMeter/LoadRunner performance tests and OWASP ZAP, Burp Suite, and Kali Linux security assessments.",
    ])
    job(story, "Junior Software QA Engineer", "Dynamic Solution Innovators — Dhaka", "Sep 2021 – Nov 2022", [
        "Built Cypress automation for OpenCRVS and delivered QA for IPEMIS, Movandi 5G, and Altech using TestRail and CI practices.",
    ])
    job(story, "Software QA Engineer (part-time)", "CarryBags Ltd — London, UK (remote)", "Jul 2020 – Aug 2021", [
        "Delivered functional, usability, compatibility, performance, mobile, and cross-device testing with disciplined regression coverage.",
    ])

    section(story, "Technical Toolkit")
    tag_table(story, [
        "Playwright", "TypeScript", "Selenium", "Cypress", "Appium", "Postman", "REST Assured",
        "GraphQL", "k6", "JMeter", "Locust", "LoadRunner", "OWASP ZAP", "Burp Suite",
        "Docker", "AWS", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI", "Grafana",
        "Prometheus", "QASE", "TestRail", "Jira", "Allure", "SQL", "Magento",
    ], doc.width)

    section(story, "Selected Engineering Outcomes")
    for item in [
        "Built MyGP's complete backend automation framework from zero with Playwright.",
        "Led Kinetik Health App QA through App Store and Google Play production release.",
        "Improved Sothik performance by 60% and reduced critical defects by 30%.",
        "Created payment-system resilience coverage using load, observability, chaos, and DR practices.",
        "Delivered 23 freelance QA engagements with a 5.0 rating and Top Rated status on Upwork.",
    ]:
        story.append(Paragraph(item, BULLET, bulletText="–"))

    section(story, "Education")
    story.append(Paragraph("B.Sc. Engineering, Computer Science &amp; Engineering — Shahjalal University of Science and Technology · 2017–2020", BULLET, bulletText="–"))
    doc.build(story)


def build_tpm():
    doc = make_doc(TPM_OUT, "Technical Project Manager CV")
    story = []
    header(story, "Technical Project Manager · Product Delivery &amp; Engineering Operations · QA Leader", "cv.pdf")

    section(story, "Professional Summary")
    story.append(Paragraph(
        "Technical Project Manager and engineering-delivery leader with <b>6+ years</b> of hands-on software "
        "and quality experience. At Platformz, lead delivery for three client platforms with a <b>30+ person "
        "cross-functional organization</b> spanning engineering, DevOps, design, QA, marketing, and HubSpot. "
        "Own roadmaps, dependencies, risks, release readiness, executive reporting, and full QA strategy. "
        "Known for turning ambiguous programs into measurable plans, including compressing a 12-month 3P "
        "hybrid EDI initiative into approximately <b>60 days</b>.", BODY,
    ))

    section(story, "Core TPM Competencies")
    competency_table(story, [
        ["Program &amp; Portfolio Delivery", "Roadmaps &amp; Prioritization", "Cross-Team Coordination"],
        ["RAID &amp; Dependency Management", "Executive &amp; Board Reporting", "Release Management"],
        ["Agile / Scrum / Kanban", "Product &amp; QA Strategy", "Vendor &amp; Client Leadership"],
    ], doc.width)

    section(story, "Professional Experience")
    job(story, "Technical Project Manager", "Platformz — platformz.us", "Sep 2024 – Present", [
        "Own end-to-end delivery for FUR4, Rockerz, and DMV Raw Feeders with executive sponsorship; lead 30+ engineers, DevOps specialists, designers, QA professionals, marketers, and functional leads.",
        "Translate business goals into roadmaps, sprint plans, ownership, milestones, release criteria, and executive-ready delivery reporting.",
        "Run dependency, scope, resource, and risk management across frontend, backend, Magento, React, AWS, GraphQL, EDI, marketing, and operations workstreams.",
        "Delivered a 12-month 3P hybrid EDI marketplace program in approximately 60 days across Amazon, Walmart, Target, Chewy, eBay, and Macy's.",
        "Own release quality across automation, manual, API, security, load, and performance testing; report status, risks, and decisions to executive and board stakeholders.",
    ])
    job(story, "Senior Software QA Engineer · SDET", "Kintsugi — San Francisco, USA (remote)", "Sep 2025 – Aug 2026", [
        "Led feature-level quality planning, engineering coordination, test strategy, and release readiness for an AI-powered sales-tax platform.",
    ])
    job(story, "Software Automation Engineer II", "All Generation Tech — New York, USA (remote)", "Feb 2024 – May 2026", [
        "Coordinated automation delivery across regulated insurance clients including CFC, Tokio Marine Kiln, and American National (ANICO).",
    ])
    job(story, "Software QA Engineer I", "Kinetik — New York, USA (remote)", "Sep 2023 – Sep 2025", [
        "Led quality strategy across Trip Scheduler, Trip Assistant, RCM, and the Kinetik Health App; coordinated product, engineering, DevOps, and release stakeholders.",
        "Planned risk-based test coverage and release gates from manual QA through API, mobile automation, security, performance, and production launch.",
    ])
    job(story, "Senior Software Automation &amp; Reliability Engineer", "Mastercard — remote", "Jan 2025 – Jun 2025", [
        "Facilitated reliability, chaos, incident-response, and disaster-recovery initiatives with platform engineers; mentored junior engineers.",
    ])
    job(story, "Augmented Senior Software QA Engineer", "Intelex via TCS — US client", "2024 – 2025", [
        "Led quality coordination for a four-region global Magento platform covering regional requirements and third-party integrations.",
    ])
    job(story, "Software QA Engineer", "Grameenphone via Miaki — MyGP", "Feb 2024 – Mar 2025", [
        "Owned planning and delivery of the complete backend automation framework for a large-scale telecom application.",
    ])
    job(story, "Earlier Quality Engineering Roles", "REVE Systems · Dynamic Solution Innovators · CarryBags Ltd", "Jul 2020 – Aug 2023", [
        "Progressed from execution-focused QA to test planning, stakeholder communication, mentoring, risk-based quality leadership, and cross-team release support.",
        "Delivered government, civic-tech, telecom, mobile, and e-commerce programs including Sothik, CBMS, OpenCRVS, and IPEMIS.",
    ])

    section(story, "Selected Program Portfolio")
    for name, result in [
        ("FUR4", "Five portals on Magento + React + GraphQL; multi-marketplace EDI, operations dashboard, dealer and referral ecosystems."),
        ("Rockerz", "DTC, dealer, referral, and dealer-locator platforms with a four-zone interactive product configurator."),
        ("DMV Raw Feeders", "Zone-based delivery routing, subscription management, referral workflows, and production operations."),
        ("Kinetik Health", "Cross-product healthcare QA and release leadership covering scheduling, trip assistance, RCM, and mobile."),
        ("MyGP", "Backend automation program designed and delivered from zero for Bangladesh's largest mobile operator app."),
    ]:
        story.append(Paragraph(f"<b>{name}:</b> {result}", BULLET, bulletText="–"))

    section(story, "Delivery Toolkit")
    tag_table(story, [
        "Jira", "Confluence", "QASE", "TestRail", "Scrum", "Kanban", "RAID Logs",
        "Roadmaps", "Release Planning", "Risk Management", "Stakeholder Reporting", "Team Leadership", "EDI", "Magento",
        "React", "GraphQL", "AWS", "Docker", "Playwright", "k6", "JMeter",
    ], doc.width)

    section(story, "Education")
    story.append(Paragraph("B.Sc. Engineering, Computer Science &amp; Engineering — Shahjalal University of Science and Technology · 2017–2020", BULLET, bulletText="–"))
    doc.build(story)


if __name__ == "__main__":
    build_sdet()
    build_tpm()
    print("WROTE", SDET_OUT)
    print("WROTE", TPM_OUT)
