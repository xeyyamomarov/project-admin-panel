import './style.scss'
import Loading from 'components/Loading';

const Table = ({ columns = [], data = [], loading = false, onClick = (record) => { } }) => {
  return (
    <div className='table-container'>

      { loading && <Loading />}
      <table>
        <thead>
          <tr>
            {columns?.map((column, index) => (<th key={index}><span className="data">{column.title}</span></th>))}
          </tr>
        </thead>
        <tbody>

          {
            data?.map((d, index) => {
              return (
                <tr onClick={() => {
                  onClick(d)
                }} key={index}>
                  {
                    columns?.map((column, iIndex) => {
                      let x;
                      if (column.render) {
                        x = column.render(d);
                      } else {
                        x = d[column?.key];
                      }
                      return (
                        <td key={iIndex}><span className="data">{x}</span></td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>);
}

export default Table;
