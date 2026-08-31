import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import { defaultSiteContent } from './defaultSiteContent'
import type { SiteContent } from './types'

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, 'site', 'content'),
      (snapshot) => {
        if (snapshot.exists()) {
          setContent({ ...defaultSiteContent, ...(snapshot.data() as Partial<SiteContent>) })
        } else {
          setContent(defaultSiteContent)
        }
      },
      () => setContent(defaultSiteContent),
    )
    return unsubscribe
  }, [])

  return content
}
