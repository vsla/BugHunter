class Company < ApplicationRecord
    #validation
    validates_presence_of :name
end
