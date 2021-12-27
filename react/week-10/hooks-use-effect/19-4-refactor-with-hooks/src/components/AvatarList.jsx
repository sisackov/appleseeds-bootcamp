const AvatarList = ({ avatars, filter }) => {
    const filteredAvatars = avatars.filter((avatar) =>
        avatar.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            {filteredAvatars.map((avatar) => (
                <div key={`avatar-${avatar.id}`} className='card'>
                    <h3>{avatar.name}</h3>
                    <img src={avatar.picture} alt={avatar.name} />
                </div>
            ))}
        </div>
    );
};

export default AvatarList;
