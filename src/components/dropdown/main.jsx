import { useDispatch } from 'react-redux';
import * as Actions from "../../action";

const Dropdown = ({ data,stateData,homeAction }) => {
  const stockData = data;
  const dispatch = useDispatch();

  const dropChange = (evt) => {
    const selectedValue = evt.target.value;
    const selectedKey = evt.target.value;

    stateData.setSelectedItem(selectedValue)

    dispatch({ type: Actions.WidgetData.GET_WIDGET_DATA, data:selectedValue });
    dispatch({ type: Actions.GraphData.GET_GRAPH_DATA, data:selectedValue  });
    dispatch({ type: Actions.TableData.GET_TABLE_WIDGET_DATA, data:selectedValue  });
    dispatch({ type: Actions.GraphData.GET_MA_GRAPH_DATA, data:selectedValue  });
    dispatch({ type: Actions.GraphData.GET_MA_BAR_DATA, data:selectedValue  });
    dispatch({ type: Actions.TableData.GET_PERFORMANCE_DATA, data:selectedValue  });
    homeAction && homeAction();
  }

  return (
    <div className="relative text-black">
      <select
        className="block appearance-none w-full bg-white-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        id="grid-state"
        onChange={(e) => dropChange(e)}
        value={stateData.selectedItem}
      >
        {stateData.selectedItem ? null : <option value="">Select</option>}
        {stockData.map((stock, index) => (
          <option key={index} value={stock.key}>
            {stock.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
