var FilteredContactsComponent = React.createClass({displayName: "FilteredContactsComponent",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h2", {style: {float:'left',marginTop:20}}, "Contacts"), 
                React.createElement(Search, null), 
                React.createElement(PhoneBook, null)
            )
        );
    }
});
var Search = React.createClass({displayName: "Search",
    render: function () {
        return (React.createElement("div", {className: "ui action input", style: {float:'right',marginBottom:10}}, 
            React.createElement("input", {type: "text", placeholder: "Search..."}), 
            React.createElement("button", {className: "ui icon button"}, 
                React.createElement("i", {className: "search icon"})
            )
        ));
    }
});
var PhoneBook = React.createClass({displayName: "PhoneBook",
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
                React.createElement("div", {className: "card", key: hero.Id}, 
                    React.createElement("div", {className: "blurring dimmable image"}, 
                        React.createElement("div", {className: "ui dimmer"}, 
                            React.createElement("div", {className: "content"}, 
                                React.createElement("div", {className: "center"}, 
                                    React.createElement("div", {className: "ui inverted button"}, "Add Friend")
                                )
                            )
                        ), 
                        React.createElement("img", {src: hero.Thumbnail})
                    ), 
                    React.createElement("div", {className: "content"}, 
                        React.createElement("a", {className: "header"}, hero.Name), 

                        React.createElement("div", {className: "meta"}, 
                            React.createElement("span", {className: "date"}, "Create in Sep 2014")
                        )
                    ), 
                    React.createElement("div", {className: "extra content"}, 
                        React.createElement("a", null, 
                            React.createElement("i", {className: "users icon"}), 
                            "2 Members"
                        )
                    )
                )
            )
        });
        return (
            React.createElement("div", null, 
                React.createElement("div", {className: "ui special cards", style: {clear:'both'}}, 
                    rows
                ), 
                React.createElement("div", {className: "ui right floated pagination menu"}, 
                    React.createElement("a", {className: "icon item"}, 
                        React.createElement("i", {className: "left chevron icon"})
                    ), 
                    React.createElement("a", {className: "item"}, "1"), 
                    React.createElement("a", {className: "item"}, "2"), 
                    React.createElement("a", {className: "item"}, "3"), 
                    React.createElement("a", {className: "item"}, "4"), 
                    React.createElement("a", {className: "icon item"}, 
                        React.createElement("i", {className: "right chevron icon"})
                    )
                )
            )
        )
    }
});
React.render(
    React.createElement(FilteredContactsComponent, null),
    document.getElementById('phoneBook')
);