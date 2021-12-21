import react from "react";

class TodoList extends react.Component {
    render() {
        return <tr key={this.props.index}>
            <td>
                {this.props.name}
            </td>
        </tr>
    }
}
export default TodoList;