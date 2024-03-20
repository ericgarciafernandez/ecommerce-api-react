import { Footer } from 'flowbite-react';

function Component() {
    return (
        <Footer container className='bg-background p-12'>
            <div className="w-full text-center">
                <Footer.Divider className='border-t-1 bg-primary' />
                <Footer.Copyright href="#" by="Eric García. Casi todos los derechos reservados" year={2024} />
            </div>
        </Footer>
    );
}

export default Component;