// import FilterDrawer from "../FilterDrawer/FilterDrawer";


// export default function Header (){
//     const [selectedTag, setSelectedTag] = useState(null);

//   //Function to update the selected tag

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag===selectedTag ? null :tag);
//   };

//     return(
//         <>
//         <header className="header">
//             <div className="header__title">
//                 <h1>Snaps</h1>
//             </div>
//             <div className="header__filter">
//             <FilterDrawer selectedTag={selectedTag} onTagSelect={handleTagClick}/>
//             </div>
//         </header>
//         </>
//     );
// }