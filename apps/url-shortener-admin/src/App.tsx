import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UrlList } from "./url/UrlList";
import { UrlCreate } from "./url/UrlCreate";
import { UrlEdit } from "./url/UrlEdit";
import { UrlShow } from "./url/UrlShow";
import { ClickList } from "./click/ClickList";
import { ClickCreate } from "./click/ClickCreate";
import { ClickEdit } from "./click/ClickEdit";
import { ClickShow } from "./click/ClickShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"URL Shortener"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Url"
          list={UrlList}
          edit={UrlEdit}
          create={UrlCreate}
          show={UrlShow}
        />
        <Resource
          name="Click"
          list={ClickList}
          edit={ClickEdit}
          create={ClickCreate}
          show={ClickShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
