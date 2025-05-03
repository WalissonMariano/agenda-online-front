import { DefaultLayout } from "../../shared/components/ui/defaultLayout";

export const Home = () => {

    const token = localStorage.getItem('token');

    console.log(token);

    return(
        <DefaultLayout>
            <div className="p-6 bg-white rounded-xl shadow-md space-y-6 w-full" style={{ minHeight: '90vh' }}>
                Home
            </div>
        </DefaultLayout>
    )
}