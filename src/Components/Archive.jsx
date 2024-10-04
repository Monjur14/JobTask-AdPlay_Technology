import AsideHeading from "./AsideHeading"

const archiveData = [
    {
        id: 1,
        date: "July 2018",
        posts: 9
    },
    {
        id: 2,
        date: "June 2018",
        posts: 39
    },
    {
        id: 3,
        date: "May 2018",
        posts: 29
    },
    {
        id: 4,
        date: "April 2018",
        posts: 35
    },
    {
        id: 5,
        date: "March 2018",
        posts: 22
    },
    {
        id: 6,
        date: "February 2018",
        posts: 32
    },
    {
        id: 7,
        date: "January 2018",
        posts: 21
    },
    {
        id: 8,
        date: "December 2017",
        posts: 26
    }
]

const Archive = () => {
  return (
    <div className="mt-14">
      <AsideHeading name={"Archive"}/>
      <ul className="mt-6">
        <li className="border-t border-gray-300"></li>
        {
            archiveData.map((data) => (
                <li className="text-sm font-semibold hover:text-green-500 duration-300 cursor-pointer py-2 border-b  border-gray-300 pl-2 flex justify-between" key={data.id}>
                    <p>{data.date}</p>
                    <p>({data.posts})</p>
                </li>
            ))
        }            
        </ul>
    </div>
  )
}

export default Archive
