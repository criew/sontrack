import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

export default class App extends React.Component {
    state = {
    };

    render() {
        return (
            <Layout>
                <Panel>
                    <AppBar title='Stimmung' leftIcon='insert_emoticon'/>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                    <List selectable ripple>
                        <ListSubHeader caption="Häufig"/>
                        <ListItem caption="Glücklich" rightIcon="star"/>
                        <ListItem caption="Nervös" rightIcon="star"/>
                        <ListSubHeader caption="Alle"/>
                        <ListItem caption="Müde" rightIcon="star_border"/>
                        <ListItem caption="Wütend" rightIcon="star_border"/>
                    </List>
                    </div>
                </Panel>
            </Layout>);
    }
}
