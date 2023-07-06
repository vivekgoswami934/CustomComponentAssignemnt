# List Component


## Info

To Show the list.

## Installation




## Usage

```jsx
import SampleList from "./Components/SampleList";
import { basicList, basicList2, sampleListData } from "./mock-data";
import "./App.css"

function App() {
  return (
    <div className="App">
      {/* <h2 className="Title">Simple list</h2> */}
      <SampleList heading="Simple List" data={sampleListData} />


      {/* <h2>Basic List with Avatar & Timeline</h2> */}
      <SampleList data={basicList2} loadMore={true} limit={4} heading={"Basic List with Avatar & Timeline"} />


      {/* <h2>Basic List with Pagination</h2> */}
      <SampleList data={basicList} pagination={true} heading="Basic List with Pagination" />

    </div>
  );
}

export default App;

export const basicList2 = [
    {
        title: "Abele",
        src: "https://casadonacarmela.com/wp-content/uploads/2020/08/pexels-italo-melo-2379004-199x300.jpg",
        text: "Anim occaecat culpa fugiat adipisicing laboris tempor ullamco proident reprehenderit sit.",
        date: "10-10-10 23:00:45"
    },
    {
        title: "Tony",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/17.jpg",
        text: "Anim occaecat culpa fugiat adipisicing laboris tempor ullamco proident reprehenderit sit.",
    },
    {
        title: "Micheal",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/17.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "C",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
        text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "D",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "E",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
        text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "F",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "G",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
        text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "H",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "I",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
        text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "J",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "K",
        src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
        text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
    {
        title: "L",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
    },
];

```



## Props

- data - This will specify the data.
- loadMore - This will specify the loadMore button is present.
- limit - This will specify the limit for the loadMore button.
- pagination - This will specify the pagination component is present.
- heading - This will specify the heading of the list.


## Props (table)

|   Prop         |    Type    |     Default      |      Description  



    data         |    Array   |       N/A        |      It will take an array of objects and schema of the 
                                                            object is title,text,src,date 

    loadMore     |   boolean  |       N/A        |      If loadmore has been passed true then it will show
                                                            below the list to load more data.

    limit        |   number   |        3         |      This will specify the limit of the loadMore button.

    pagination   |   N/A      |       N/A        |      This will specify the limit of the loadMore button.

    heading      |   string   |       N/A        |      This will specify the limit of the loadMore button.




## License

MIT © [](https://github.com/)
