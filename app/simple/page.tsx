import { PlaceholderPage } from '@/components/site/placeholder-page';
import { SiteShell } from '@/components/site/site-shell';

export default function SimplePage() {
  return (
    <SiteShell>
      <PlaceholderPage title="Simple" sourceFile="simple.php" />
    </SiteShell>
  );
}
