import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-300 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eaque numquam nisi veniam quidem cumque, et rem velit laboriosam.
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Dolor sit amet consectetur</p>
          <p className="my-5">Et rem velit laboriosam</p>
          <p>Veniam quidem cumque</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Hura inomus mattis agus</p>
          <p>+333 468 9841</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
