import LoginForm from '@/components/forms/Loginform';
import Breadcrumbs from '@/components/shared/breadcrumbs/BreadCrumbs';

const page = () => {
    return (
        <div className="">
            <Breadcrumbs />
            <div className="w-1/2 mx-auto my-14">
                <LoginForm />
            </div>
        </div>
    )
}

export default page