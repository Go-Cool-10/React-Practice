import React from 'react'
import { ProviderContext } from './providerContext'

const DataProvider = () => {
  return (
    <>
    <ProviderContext.Provider value={{'name': 'Gogul'}}>
        <DataConsumer>
            <ButtonDemo>
            </ButtonDemo>
        </DataConsumer>
    </ProviderContext.Provider>
    </>
  )
}

export default DataProvider