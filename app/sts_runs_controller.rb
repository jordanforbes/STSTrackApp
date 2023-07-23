class StsRunsController < ApplicationController
  before_action :set_sts_run, only: %i[ show edit update destroy ]

  module Api
    module V1

      # GET /sts_runs or /sts_runs.json
      def index
        @sts_runs = StsRun.all
      end

      # GET /sts_runs/1 or /sts_runs/1.json
      def show
        @sts_run = StsRun.find(params[:id])
      end

      # GET /sts_runs/new
      def new
        @sts_run = StsRun.new
      end

      # GET /sts_runs/1/edit
      def edit
        @sts_run = StsRun.find(params[:id])
      end

      # POST /sts_runs or /sts_runs.json
      def create
        @sts_run = StsRun.new(sts_run_params)

        respond_to do |format|
          if @sts_run.save
            format.html { redirect_to sts_run_url(@sts_run), notice: "Sts run was successfully created." }
            format.json { render :show, status: :created, location: @sts_run }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: @sts_run.errors, status: :unprocessable_entity }
          end
        end
      end

      # PATCH/PUT /sts_runs/1 or /sts_runs/1.json
      def update
        respond_to do |format|
          if @sts_run.update(sts_run_params)
            format.html { redirect_to sts_run_url(@sts_run), notice: "Sts run was successfully updated." }
            format.json { render :show, status: :ok, location: @sts_run }
          else
            format.html { render :edit, status: :unprocessable_entity }
            format.json { render json: @sts_run.errors, status: :unprocessable_entity }
          end
        end
      end

      # DELETE /sts_runs/1 or /sts_runs/1.json
      def destroy
        @sts_run.destroy

        respond_to do |format|
          format.html { redirect_to sts_runs_url, notice: "Sts run was successfully destroyed." }
          format.json { head :no_content }
        end
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_sts_run
          @sts_run = StsRun.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def sts_run_params
          params.require(:sts_run).permit(:character, :floor)
        end
    end
  end
end
