require 'test_helper'

class CorrespondencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @correspondence = correspondences(:one)
  end

  test "should get index" do
    get correspondences_url, as: :json
    assert_response :success
  end

  test "should create correspondence" do
    assert_difference('Correspondence.count') do
      post correspondences_url, params: { correspondence: { id: @correspondence.id, input: @correspondence.input, title: @correspondence.title } }, as: :json
    end

    assert_response 201
  end

  test "should show correspondence" do
    get correspondence_url(@correspondence), as: :json
    assert_response :success
  end

  test "should update correspondence" do
    patch correspondence_url(@correspondence), params: { correspondence: { id: @correspondence.id, input: @correspondence.input, title: @correspondence.title } }, as: :json
    assert_response 200
  end

  test "should destroy correspondence" do
    assert_difference('Correspondence.count', -1) do
      delete correspondence_url(@correspondence), as: :json
    end

    assert_response 204
  end
end
