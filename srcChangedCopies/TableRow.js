export function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description.substring(0, 50)}...</td>
      <td>{props.information.substring(0, 50)}...</td>
      <td>{props.image.substring(0, 50)}...</td>
      <td>
        <button onClick={props.handleClick}>X</button>
      </td>
    </tr>
  );
}
