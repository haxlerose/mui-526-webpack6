class HomeController < ApplicationController
  def show
    @home_data = {
      dataKey: 'dataValue',
      dataKey2: 'dataValue2',
      dataKey3: 'dataValue3'
    }.to_json
    puts ">>>>> DATA FROM CONTROLLER: #{@home_data}"
  end
end
