import "./keypad.css";
function Key({ handleClick, handClear, caluclate }) {
  return (
    <div className="keypad">
      <div className="col">
        <button
          onClick={() => {
            handleClick("7");
          }}
          className="digit"
        >
          7
        </button>
        <button
          onClick={() => {
            handleClick("8");
          }}
          className="digit"
        >
          8
        </button>
        <button
          onClick={() => {
            handleClick("9");
          }}
          className="digit"
        >
          9
        </button>
        <button
          onClick={() => {
            handleClick("/");
          }}
          className="operator"
        >
          /
        </button>
      </div>
      <div className="col">
        <button
          onClick={() => {
            handleClick("4");
          }}
          className="digit"
        >
          4
        </button>
        <button
          onClick={() => {
            handleClick("5");
          }}
          className="digit"
        >
          5
        </button>
        <button
          onClick={() => {
            handleClick("6");
          }}
          className="digit"
        >
          6
        </button>
        <button
          onClick={() => {
            handleClick("*");
          }}
          className="operator"
        >
          *
        </button>
      </div>
      <div className="col">
        <button
          onClick={() => {
            handleClick("1");
          }}
          className="digit"
        >
          1
        </button>
        <button
          onClick={() => {
            handleClick("2");
          }}
          className="digit"
        >
          2
        </button>
        <button
          onClick={() => {
            handleClick("3");
          }}
          className="digit"
        >
          3
        </button>
        <button
          onClick={() => {
            handleClick("-");
          }}
          className="operator"
        >
          -
        </button>
      </div>
      <div className="col">
        <button
          onClick={() => {
            handleClick("0");
          }}
          className="digit"
        >
          0
        </button>
        <button
          className="funKey"
          onClick={() => {
            caluclate();
          }}
        >
          =
        </button>
        <button
          onClick={() => {
            handClear();
          }}
          className="funKey"
        >
          C
        </button>
        <button
          onClick={() => {
            handleClick("+");
          }}
          className="operator"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Key;