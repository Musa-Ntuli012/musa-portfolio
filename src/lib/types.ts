export type ProjectRole =
  | 'Lead developer'
  | 'Team lead'
  | 'Developer'
  | 'Contributor'

export interface Project {
  id: string
  order: number
  name: string
  description: string
  role: ProjectRole
  status: 'Live' | 'In progress' | 'Archived'
  tags: string[]
  repoUrl?: string
  liveUrl?: string
}

export interface SiteContent {
  heroTagline: string
  aboutBody: string
  contactLead: string
}
