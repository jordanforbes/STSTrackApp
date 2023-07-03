require "application_system_test_case"

class StsRunsTest < ApplicationSystemTestCase
  setup do
    @sts_run = sts_runs(:one)
  end

  test "visiting the index" do
    visit sts_runs_url
    assert_selector "h1", text: "Sts runs"
  end

  test "should create sts run" do
    visit sts_runs_url
    click_on "New sts run"

    fill_in "Character", with: @sts_run.character
    fill_in "Floor", with: @sts_run.floor
    click_on "Create Sts run"

    assert_text "Sts run was successfully created"
    click_on "Back"
  end

  test "should update Sts run" do
    visit sts_run_url(@sts_run)
    click_on "Edit this sts run", match: :first

    fill_in "Character", with: @sts_run.character
    fill_in "Floor", with: @sts_run.floor
    click_on "Update Sts run"

    assert_text "Sts run was successfully updated"
    click_on "Back"
  end

  test "should destroy Sts run" do
    visit sts_run_url(@sts_run)
    click_on "Destroy this sts run", match: :first

    assert_text "Sts run was successfully destroyed"
  end
end
