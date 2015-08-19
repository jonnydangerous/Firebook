var FilteredContactsComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h2 style={{float:'left',marginTop:20}}>Contacts</h2>
                <Search/>
                <PhoneBook/>
            </div>
        );
    }
});
var Search = React.createClass({
    render: function () {
        return (<div className="ui action input" style={{float:'right',marginBottom:10}}>
            <input type="text" placeholder="Search..."/>
            <button className="ui icon button">
                <i className="search icon"/>
            </button>
        </div>);
    }
});
var PhoneBook = React.createClass({
    getInitialState: function () {

        return {data: []};
    },
    componentDidMount: function () {
        $.ajax({
            url: "api/phonebook",
            cache: true,
            success: function (data) {
                this.setState({data: data});
                $('.special.cards .image').dimmer({
                    on: 'hover'
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("api/phonebook", status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        var rows = this.state.data.map(function (hero) {
            return (
                <div className="card" key={hero.Id}>
                    <div className="blurring dimmable image">
                        <div className="ui dimmer">
                            <div className="content">
                                <div className="center">
                                    <div className="ui inverted button">Add Friend</div>
                                </div>
                            </div>
                        </div>
                        <img src={hero.Thumbnail}/>
                    </div>
                    <div className="content">
                        <a className="header">{hero.Name}</a>

                        <div className="meta">
                            <span className="date">Create in Sep 2014</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="users icon"/>
                            2 Members
                        </a>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className="ui special cards" style={{clear:'both'}}>
                    {rows}
                </div>
                <div className="ui right floated pagination menu">
                    <a className="icon item">
                        <i className="left chevron icon"/>
                    </a>
                    <a className="item">1</a>
                    <a className="item">2</a>
                    <a className="item">3</a>
                    <a className="item">4</a>
                    <a className="icon item">
                        <i className="right chevron icon"/>
                    </a>
                </div>
            </div>
        )
    }
});
React.render(
    <FilteredContactsComponent/>,
    document.getElementById('phoneBook')
);