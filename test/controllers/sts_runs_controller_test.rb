require "test_helper"

class StsRunsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sts_run = sts_runs(:one)
  end

  test "should get index" do
    get sts_runs_url
    assert_response :success
  end

  test "should get new" do
    get new_sts_run_url
    assert_response :success
  end

  test "should create sts_run" do
    assert_difference("StsRun.count") do
      post sts_runs_url, params: { sts_run: { character: @sts_run.character, floor: @sts_run.floor } }
    end

    assert_redirected_to sts_run_url(StsRun.last)
  end

  test "should show sts_run" do
    get sts_run_url(@sts_run)
    assert_response :success
  end

  test "should get edit" do
    get edit_sts_run_url(@sts_run)
    assert_response :success
  end

  test "should update sts_run" do
    patch sts_run_url(@sts_run), params: { sts_run: { character: @sts_run.character, floor: @sts_run.floor } }
    assert_redirected_to sts_run_url(@sts_run)
  end

  test "should destroy sts_run" do
    assert_difference("StsRun.count", -1) do
      delete sts_run_url(@sts_run)
    end

    assert_redirected_to sts_runs_url
  end
end
