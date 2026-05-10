-- CreateEnum
CREATE TYPE "ClimbingType" AS ENUM ('BOULDERING', 'LEAD', 'TOP_ROPE');

-- CreateEnum
CREATE TYPE "WallProfile" AS ENUM ('OVERHANG', 'VERTICAL', 'SLAB', 'CRACK', 'CAVE');

-- CreateEnum
CREATE TYPE "ClimbingResult" AS ENUM ('SENT', 'HANGDOG', 'ATTEMPT');

-- CreateEnum
CREATE TYPE "DifficultyFeel" AS ENUM ('VERY_SOFT', 'SOFT', 'FAIR', 'HARD', 'VERY_HARD');

-- CreateTable
CREATE TABLE "climbing_workout" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isOutdoor" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT,

    CONSTRAINT "climbing_workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "climb" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "climbingType" "ClimbingType" NOT NULL,
    "wallProfile" "WallProfile" NOT NULL,
    "targetLaps" INTEGER NOT NULL DEFAULT 1,
    "completedLaps" INTEGER NOT NULL DEFAULT 0,
    "result" "ClimbingResult" NOT NULL,
    "difficultyFeel" "DifficultyFeel",
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "climb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "climbing_workout_userId_idx" ON "climbing_workout"("userId");

-- CreateIndex
CREATE INDEX "climb_workoutId_idx" ON "climb"("workoutId");

-- AddForeignKey
ALTER TABLE "climbing_workout" ADD CONSTRAINT "climbing_workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "climb" ADD CONSTRAINT "climb_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "climbing_workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
