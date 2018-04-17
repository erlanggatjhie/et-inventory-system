type state = {
  count: int,
  show: bool,
};

type action =
  | Click
  | Toggle;

let component = ReasonReact.reducerComponent("AnotherHelloWorld");

let make = (~greeting, _children) => {
  ...component,
  initialState: () => {count: 0, show: true},
  reducer: (action, state) =>
    switch (action) {
    | Click => ReasonReact.Update({...state, count: state.count + 1})
    | Toggle => ReasonReact.Update({...state, show: ! state.show})
    },
  render: self => {
    let message =
      "You have clicked this "
      ++ string_of_int(self.state.count)
      ++ " time(s)";
    <div>
      <button onClick=(_event => self.send(Click))>
        (ReasonReact.stringToElement(message))
      </button>
      <button onClick=(_event => self.send(Toggle))>
        (ReasonReact.stringToElement("Toggle Greeting"))
      </button>
      (
        self.state.show ?
          ReasonReact.stringToElement(greeting) : ReasonReact.nullElement
      )
    </div>;
  },
};
