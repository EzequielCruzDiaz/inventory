import { siteConfig } from "@/app/Siteconfig";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              {siteConfig.siteName} is the perfect solution for managing your
              online business efficiently and effectively.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email: {siteConfig.contactEmail}
            </p>
            <p className="text-muted-foreground">
              Phone: {siteConfig.contactPhone}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground font-bold">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
