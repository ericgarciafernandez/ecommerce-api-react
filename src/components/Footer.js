import { Footer } from "flowbite-react";

function Component() {
  return (
    <Footer container className="bg-background p-6 md:p-12">
      <div className="w-full text-center">
        <Footer.Divider className="border-t border-primary mb-4" />
        <Footer.Copyright
          href="#"
          by="Eric García. Casi todos los derechos reservados"
          year={2024}
        />
      </div>
    </Footer>
  );
}

export default Component;
