import Palette from "./Palette";
import PaletteList from "./PaletteList";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import SingleColorPalette from "./SingleColorPalette";
import "./App.css";

function App() {
  const findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      {/* <div>
        <Palette palette={generatePalette(seedColors[4])}/>
      </div> */}
    </div>
  );
}

export default App;
