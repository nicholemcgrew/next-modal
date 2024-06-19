import Link from "next/link"
import Dialog from "../components/Dialog"

export default function Products() {

    async function onClose() {
        "use server"
        console.log("Modal has closed")
    }
    async function onOk() {
        "use server"
        console.log("Ok was clicked")
    }

  return (
    <>

    <Dialog title="Example Modal" onClose={onClose} onOk={onOk} >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laudantium dolorem ut odit facilis consequatur aut quia sint animi, nam saepe architecto blanditiis. Unde veritatis molestias debitis voluptatem explicabo perspiciatis.</p>
    </Dialog>

      <h1 className="text-5xl">Home</h1>

      <Link href="/" className="text-3xl underline">Go to Home</Link>
      
      <section className="text-2xl flex flex-col gap-4 p-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, numquam dolorum consequatur reprehenderit nesciunt eligendi harum aspernatur necessitatibus! Mollitia voluptate, assumenda eum vero eligendi dolores explicabo voluptas quibusdam vitae. Odio!</p>
      </section>

    </>
  )
}