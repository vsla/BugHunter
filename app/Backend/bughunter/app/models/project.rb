class Project < ApplicationRecord
  #model assciation 
  belongs_to :company
  #validation
  validates_presence_of :name
end
