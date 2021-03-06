var Demo = React.createClass({
    render: function () {

        var radioOptions = [
            { value: 'newspaper', label: 'Newspaper' },
            { value: 'radio', label: 'Radio' },
            { value: 'tv', label: 'Television' },
            { value: 'search', label: 'Search Engine' },
            { value: 'social', label: 'Social' }
        ];

        return (

            <div className="container">
                <h1>React.js Radio Group Demo</h1>

                <form>
                    <p className="h3">How did you hear about us?</p>

                    <RadioOptionGroup options={radioOptions} />

                    <p><input type="submit"/></p>
                </form>
            </div>
        );
    }
});