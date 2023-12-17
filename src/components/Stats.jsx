export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

// const Stat =()=>{
//   if(!Item.lenth){
//     return( <p> Start Packing your bagages</p>
//     )
//     const packedItem = items.length
//     const numPacked = item.filter((item) =>item.packed).length
// const pacentagePacked = item.Math.round((numPacked / numItems) * 100)
// return (
//   <footer>
//     <em>
//       {percentage === 100 ? "you have everthing ready to Go" : `you have you have $(numItems) on your list and
//       you already packed ${numPacked} (${percentage}) `}
//     </em>
//   </footer>
// )
// }
// export default Stat
