import Header from "./Header"
import Footer from "./Footer"
import { useAuth } from "./context"

export default function Home(){

    const {user} = useAuth()

    return(
        <>
        <Header />
        {user && (
            <div style={{padding:10, border:'1px solid red', width:350}}> 
                bu alan sadece giriş yapılınca görünür
            </div>
        )}
      <Footer />
        </>
    )
}