import SampleList from "./Components/SampleList";
import { basicList, basicList2, sampleListData } from "./mock-data";
import "./App.css"

function App() {
  return (
    <>
      {/* <h2 className="Title">Simple list</h2> */}
      <SampleList heading="Simple List" data={sampleListData} />


      {/* <h2>Basic List with Avatar & Timeline</h2> */}
      <SampleList data={basicList2} loadMore={true} limit={4} heading={"Basic List with Avatar & Timeline"} />


      {/* <h2>Basic List with Pagination</h2> */}
      <SampleList data={basicList} pagination={true} heading="Basic List with Pagination" />

    </>
  );
}

export default App;
