/*
  Warnings:

  - Added the required column `ticketPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable to add ticketPrice column with a default value
ALTER TABLE [dbo].[Booking] ADD [ticketPrice] FLOAT(53) DEFAULT 0 NOT NULL;

-- Remove the default value
ALTER TABLE [dbo].[Booking] ALTER COLUMN [ticketPrice] FLOAT(53) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
