import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const input = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <div className="flex mt-2 max-w-96 min-w-72">
      <input
        className="input input-bordered w-full min-w-72 bg-slate-100"
        placeholder="Search name"
        type="text"
        value={input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
