import { useDispatch, useSelector } from "react-redux";
// import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import {
  selectNameFilter,
  // selectNameFilter,
  // selectNumberFilter,
} from "../../redux/filters/selectors";

const SearchBox = () => {
  const input = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  // return (
  //   <div className={css.container}>
  //     <p>Find contacts by name</p>
  //     <input
  //       className={css.input}
  //       type="text"
  //       value={input}
  //       onChange={(e) => dispatch(changeFilter(e.target.value))}
  //     />
  //   </div>
  // );

  return (
    <div className="flex mt-2 max-w-96 min-w-72">
      {/* <div>
        <div> */}
      <input
        className="input input-bordered w-full min-w-72 bg-slate-100"
        placeholder="Search name"
        type="text"
        value={input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
      {/* </div>
      </div> */}
    </div>
  );
};

export default SearchBox;
