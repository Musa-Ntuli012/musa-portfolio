import type { SiteContent } from './types'

// Fallback copy, shown until an admin edits and saves site content in
// Firestore for the first time (doc: site/content).
export const defaultSiteContent: SiteContent = {
  heroTagline:
    'Full stack developer across C# / ASP.NET Core and JavaScript / TypeScript, and founder of Kyvrex, a one person software studio. I own a feature from database schema to the interface someone actually touches, with security and edge cases considered first.',
  aboutBody:
    'I am a full stack software developer who builds systems that hold up under real use, not just in a demo. I work comfortably across C# / ASP.NET Core and JavaScript / TypeScript, from relational schemas and secure APIs through to the interface on top.\n\nI graduated with distinction from Varsity College Pretoria with a BCAD in Computer Science and Information Technology, application development specialisation, and hold a Foundational C# Microsoft Certification.\n\nIn 2026 I registered Kyvrex, a solo software studio based in Pretoria, and I am currently looking for a team where I can keep building real, reliable software.',
  contactLead:
    'Open to graduate and junior developer roles. Based in Pretoria, happy to talk about any of the work above in more detail.',
}
