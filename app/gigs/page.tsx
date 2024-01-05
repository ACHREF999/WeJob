import FilterBar from "./components/FilterBar";
import GigsBlock from "./components/GigsBlock";


type Props = {
  params:{
    keyword:string,
    // what we need is keyword , tags , categories
  }
}

export default function GigsSearchPage({params:{keyword}}: Props) {
  console.log('Keyword: '+keyword);
  return <div className="flex flex-row mt-6 w-full gap-8">
    <FilterBar />
    <GigsBlock />
  </div>
}