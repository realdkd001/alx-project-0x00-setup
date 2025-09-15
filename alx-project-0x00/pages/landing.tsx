import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" styles=" border px-1 py-1 text-sm mt-3  bg-blue-500 text-white rounded-sm"/>
      <Button title="Medium" styles=" border px-2 py-1 text-md mt-3  bg-blue-500 text-white rounded-md"/>
      <Button title="Large" styles=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full"/>
    </div>
  )
}
export default Landing