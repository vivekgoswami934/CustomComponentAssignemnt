import SampleList from "./Components/SampleList";

function App() {
  return (
    <div className="App">
      {/* <h2 className="Title">Simple list</h2> */}
      <SampleList heading="Simple List"  />


      {/* <h2>Basic List with Avatar & Timeline</h2> */}
      <SampleList data={basicList2} loadMore={true} limit = {4} heading={"Basic List with Avatar & Timeline"} />


      {/* <h2>Basic List with Pagination</h2> */}
      <SampleList data={basicList} pagination={true} heading="Basic List with Pagination" />

    </div>
  );
}

export default App;













const sampleListData2 = [
  {
    title: "Name Title 1",
    date: "10-20-30 12:00:45",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusclobortis quam vitae sollicitudin iaculis Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque ",
  },
  {
    title: "Name Title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusclobortis quam vitae sollicitudin iaculis Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet,consectetur adipiscing elit. iquam in felis in pellentesque ",
  },
  {
    title: "Name Title 3",
    date: "10-20-30 12:00:45",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusclobortis quam vitae sollicitudin iaculis Suspendisse potenti. Sed aliquam  potenti. Sed aliquam in felis in pellentesque ",
  },
];

const basicList = [
  {
    title: "Abele",
    src: "https://casadonacarmela.com/wp-content/uploads/2020/08/pexels-italo-melo-2379004-199x300.jpg",
    text: "Anim occaecat culpa fugiat adipisicing laboris tempor ullamco proident reprehenderit sit.",
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
    title: "John",
    src: "https://xsgames.co/randomusers/assets/avatars/pixel/16.jpg",
    text: "Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
  },
  {
    title: "Vishnu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis quam vitae sollicitudin iaculis. Suspendisse potenti. Sed aliquam in felis in pellentesque.",
  },
];

const basicList2 = [
  {
    title: "Abele",
    src: "https://casadonacarmela.com/wp-content/uploads/2020/08/pexels-italo-melo-2379004-199x300.jpg",
    text: "Anim occaecat culpa fugiat adipisicing laboris tempor ullamco proident reprehenderit sit.",
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