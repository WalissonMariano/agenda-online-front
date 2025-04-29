import { DefaultLayout } from "../../shared/components/ui/defaultLayout";

export const Home = () => {

    const token = localStorage.getItem('token');

    console.log(token);

    return(
        <DefaultLayout>
            <div>
                Home
            </div>
        </DefaultLayout>
    )
}