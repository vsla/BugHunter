require 'rails_helper'

RSpec.describe Company, type: :model do
  it { should validate_presence_of(:name)}

  # pending "add some examples to (or delete) #{__FILE__}"
end
