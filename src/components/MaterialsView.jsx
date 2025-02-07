import MaterialsList from './MaterialsList'
import MaterialsHeader from './MaterialsHeader'

function MaterialsView() {
  return (
    <div>
      <div className="materials-header">
        <MaterialsHeader />
        
      </div>
      <MaterialsList />
    </div>
  )
}

export default MaterialsView 