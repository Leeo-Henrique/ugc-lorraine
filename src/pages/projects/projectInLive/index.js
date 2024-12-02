export const ProjectInLive = ({project}) => {
  return (
    <>
      <h2>{project.name}</h2>
      <video>{project.video}</video>
    </>
  );
};
